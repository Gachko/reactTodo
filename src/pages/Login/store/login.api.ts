export const loginUser = async (userName: string) => {
    localStorage.setItem('user', userName)
}

export const logoutUser = async () => {
    delete localStorage.user
}


