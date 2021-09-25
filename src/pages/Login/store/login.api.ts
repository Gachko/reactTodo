// import { axios } from '../../../../common'
//
// export const loadMindMapNodes = async (topicId: number) => {
//     try {
//         const mindMapNodes = await axios.get('topic/mindMapNodes', { params: { topicId } })
//         return mindMapNodes.data
//     } catch (err) {
//         console.error(err)
//     }
// }

export const loginUser = async (userName: string) => {
    localStorage.setItem('user', userName)
}

export const logoutUser = async () => {
    delete localStorage.user
}


