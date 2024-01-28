import {CHECK_INTERVAL} from './const';

export type ApplyCategory = 'apply' | 'extend' | 'apply_permanent';
export type ApplyReason = 'educational' | 'economic' | 'family' | 'empty';
export type ApplyPurpose =
  | '18p2'
  | '16b'
  | '21p5'
  | 'sect28'
  | '28p2'
  | '29d32'
  | '19c2';

interface Config {
  telegramToken: string;
  telegramChatID: number;
  mainCitizenship: string;
  numberOfPeople: string;
  liveWith: string;
  partnerCitizenship: string;
  category: ApplyCategory;
  reason: ApplyReason;
  purpose: ApplyPurpose;
  checkInterval: number;
  passportFirstName: string;
  passportLastName: string;
  emailAddress: string;
  dateOfBirth: string;
  existingVisaNumber: string;
}

export const config: Config = (() => {
  return {
    passportFirstName: process.env.PASSPORT_FIRST_NAME || '',
    passportLastName: process.env.PASSPORT_LAST_NAME || '',
    emailAddress: process.env.EMAIL_ADDRESS || '',
    dateOfBirth: process.env.DATE_OF_BIRTH || '',
    existingVisaNumber: process.env.EXISTING_VISA_NUMBER || '',
    telegramToken: process.env.TELEGRAM_TOKEN || '',
    telegramChatID: parseInt(process.env.TELEGRAM_CHATID || '0', 10),
    mainCitizenship: process.env.MAIN_CITIZENSHIP || 'United States of America',
    numberOfPeople: process.env.NUMBER_OF_PEOPLE || 'one person',
    liveWith: process.env.LIVE_WITH || 'no',
    partnerCitizenship:
      process.env.PARTNER_CITIZENSHIP || 'United States of America',
    category: (() => {
      if (
        process.env.CATEGORY !== 'apply' &&
        process.env.CATEGORY !== 'extend' &&
        process.env.CATEGORY !== 'apply_permanent'
      ) {
        throw new Error('CATEGORY config value is unknown');
      }
      return process.env.CATEGORY;
    })(),
    reason: (() => {
      if (
        process.env.REASON !== 'educational' &&
        process.env.REASON !== 'economic' &&
        process.env.REASON !== 'family' &&
        process.env.REASON !== 'empty'
      ) {
        throw new Error('REASON config value is unknown');
      }
      return process.env.REASON;
    })(),
    purpose: (() => {
      if (
        process.env.PURPOSE !== '18p2' &&
        process.env.PURPOSE !== '16b' &&
        process.env.PURPOSE !== '21p5' &&
        process.env.PURPOSE !== 'sect28' &&
        process.env.PURPOSE !== '28p2' &&
        process.env.PURPOSE !== '29d32' &&
        process.env.PURPOSE !== '19c2'
      ) {
        throw new Error('PURPOSE config value is unknown');
      }
      return process.env.PURPOSE;
    })(),
    checkInterval: parseInt(
      process.env.CHECK_INTERVAL || CHECK_INTERVAL.toString(),
      10
    ),
  };
})();
