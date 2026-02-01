import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserSessionStore = defineStore('UserSessionStore', () => {
    // State
    const userName = ref("Guest Builder")
    // Actions
    const visitGitHub = () => {
        const githubUser = 'MarcBonamusa'
        window.open(`https://github.com/${githubUser}`, '_blank')
    }

    return { userName, visitGitHub }
})