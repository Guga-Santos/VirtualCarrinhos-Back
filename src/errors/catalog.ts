export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  EmptyBody = 'EmptyBody',
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
};