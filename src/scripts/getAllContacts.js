import { readContacts } from '../utils/index.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('All contacts:');
    console.table(contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error.message);
    return [];
  }
};

console.log(await getAllContacts());
