import { API_SIGNUP } from '../../constants/app.constants';
import { postRequest } from '../../utils/service/service.utils';

export interface SignupServiceProps {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export const signupService = async ({
  email,
  firstName,
  lastName,
  password,
}: SignupServiceProps): Promise<{
  token: string;
}> => {
  try {
    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    };
    const resp = await postRequest(API_SIGNUP, data);
    return { token: resp.data.token };
  } catch (err) {
    throw new Error('user signup Failed');
  }
};
