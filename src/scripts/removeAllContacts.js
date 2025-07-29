import { writeContacts } from '../utils/index.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Successfully removed all contacts');
  } catch (error) {
    console.error('Error removing all contacts:', error.message);
  }
};

removeAllContacts();
