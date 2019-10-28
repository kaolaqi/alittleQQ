const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.nickname,
  mobile: state => state.user.mobile,
  userId: state => state.user.userInfo.userId
}
export default getters
