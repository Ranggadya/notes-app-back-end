const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationresult = NotePayloadSchema.validate(payload);

    if (validationresult.error) {
      throw new Error(validationresult.error.message);
    }
  },
};

module.exports = NotesValidator;
