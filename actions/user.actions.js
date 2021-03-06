export const SET_USER = 'user/SET_USER';
export const GET_USER = 'user/GET_USER';
export const REGISTER_MENTEE = 'user/REGISTER_MENTEE';
export const UPLOAD_PROFILE_PIC = 'user/UPLOAD_PROFILE_PIC';
export const FAILED_REGISTER_MENTEE = 'user/FAILED_REGISTER_MENTEE';
export const FAILED_REGISTER_MENTOR = 'user/FAILED_REGISTER_MENTOR';
export const FAILED_LOGIN = 'user/FAILED_LOGIN';
export const LOGOUT_USER = 'user/LOGOUT_USER';
export const REGISTER_WITH_LINKEDIN = 'user/REGISTER_WITH_LINKEDIN';
export const SET_USER_FIELDS = 'user/SET_USER_FIELDS';
export const REGISTER_MENTOR = 'user/REGISTER_MENTOR';
export const LOGIN = 'user/LOGIN';
export const UPDATE_USER = 'user/UPDATE_USER';
export const REGISTER_FOR_PUSH_NOTIFICATIONS = 'user/REGISTER_FOR_PUSH_NOTIFICATIONS';
export const CHANGE_PASSWORD = 'user/CHANGE_PASSWORD';

export const setUser = user => ({
	type: SET_USER,
	user,
});

export const getUser = userId => ({
	type: GET_USER,
	userId,
})

export const registerMentee = mentee => ({
	type: REGISTER_MENTEE,
	mentee,
});

export const registerWithLinkedin = () => ({
	type: REGISTER_WITH_LINKEDIN,
});

export const uploadProfilePic = (uri, user_id) => ({
	type: UPLOAD_PROFILE_PIC,
	uri,
	user_id,
})

export const failedRegisterMentee = error => ({
	type: FAILED_REGISTER_MENTEE,
	error,
});

export const failedRegisterMentor = error => ({
	type: FAILED_REGISTER_MENTOR,
	error,
});

export const failedLogin = error => ({
	type: FAILED_LOGIN,
	error,
});

export const logoutUser = () => ({
	type: LOGOUT_USER,
});

export const setUserFields = fields => ({
	type: SET_USER_FIELDS,
	fields,
});

export const registerMentor = mentor => ({
	type: REGISTER_MENTOR,
	mentor,
});

export const login = (email_address, password) => ({
	type: LOGIN,
	email_address,
	password,
});

export const updateUser = user => ({
	type: UPDATE_USER,
	user,
})

export const registerForPushNotifications = user_id => ({
  type: REGISTER_FOR_PUSH_NOTIFICATIONS,
  user_id,
});

export const changePassword = (currentPassword, newPassword) => ({
  type: CHANGE_PASSWORD,
  currentPassword,
  newPassword,
});
