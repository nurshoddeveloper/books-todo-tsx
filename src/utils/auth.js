export function auth() {
    return {
        headers: {
            Authorization: `Token ${localStorage.token}`,
        },
    }
}

let permissions

export function clearPermissions() {
    permissions = undefined
}


export function signOut(history) {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('permissions')
    clearPermissions()
    history.push('/')
}
