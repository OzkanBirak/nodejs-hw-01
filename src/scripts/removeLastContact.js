import { readContacts, writeContacts } from '../utils/index.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    
    if (contacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }
    
    const removedContact = contacts.pop();
    await writeContacts(contacts);
    console.log(`Successfully removed last contact: ${removedContact.name}`);
  } catch (error) {
    console.error('Error removing last contact:', error.message);
  }
};

removeLastContact();
