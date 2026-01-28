import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserSessionStore = defineStore('UserSessionStore', () => {

    const userName = ref("Guest Builder")
    
    const visitGitHub = () => {
        const githubUser = 'MarcBonamusa'
        window.open(`https://github.com/${githubUser}`, '_blank')
    }

    return { userName, visitGitHub }
})