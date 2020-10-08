import * as React from 'react';
import { FetchUsersAPI } from 'api/FetchUsersAPI';
import { LoginUserAPI } from 'api/LoginUserAPI';
import { LogoutUserAPI } from 'api/LogoutUserAPI';
import { RegisterUserAPI } from 'api/RegisterUserAPI';

type IProps = {};

export const UsersAPIList: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
    <FetchUsersAPI />
    <LoginUserAPI />
    <LogoutUserAPI />
    <RegisterUserAPI />
  </div>
  );
};
