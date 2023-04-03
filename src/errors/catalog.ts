export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  EmptyBody = 'EmptyBody',
  FieldsMissing = 'FieldsMissing',
}

type ErrorResponseObj = {
  error: string;
  httpStatus: number;
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObj
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
  EmptyBody: {
    error: 'You have to provide a body',
    httpStatus: 400,
  },
  FieldsMissing: {
    error: 'Some field are missing',
    httpStatus: 400,
  },
};