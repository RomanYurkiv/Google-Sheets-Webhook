import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {drive_v3, google, sheets_v4} from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import * as credentials from '../../credential.json';

@Injectable()
export class GoogleSheetsService implements OnModuleInit {
  private sheets: sheets_v4.Sheets;
  private drive: drive_v3.Drive;
  private spreadsheetId: string;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    const auth = new GoogleAuth({
      credentials:  credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive',  ],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
    this.drive = google.drive({ version: 'v3', auth });

    this.spreadsheetId = '1-N0b8IIKigEIKaRVvNKZHoYNHKGk4a-htUUbge28dzQ';
  }

  async getSpreadsheetValues(range: string) {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range
    });
    return response.data.values;
  }

  async getViewersAndEditors() {
    try {
      const response = await this.drive.permissions.list({
        fileId: this.spreadsheetId,
        fields: 'permissions(emailAddress, role)',
      });

      const permissions = response.data.permissions || [];
      const editors = [];
      const viewers = [];

      for (const permission of permissions) {
        if (permission.role === 'writer' || permission.role === 'owner') {
          editors.push(permission.emailAddress);
        } else if (permission.role === 'reader') {
          viewers.push(permission.emailAddress);
        }
      }

      return editors.concat(viewers)
    } catch (error) {
      console.error('Error fetching permissions:', error);
      throw error;
    }
  }
}
