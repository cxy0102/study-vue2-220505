const cadreListInfo = {
    // namespaced: true,
    state: {
        titleData: {},
        isBack: true,
    },
    mutations: {
        SET_CADRE_TITLE: (state, data) => {
            state.titleData = data
        },
        SET_BACK: (state, data) => {
            state.isBack = data
        },
    },

    actions: {
        setCadreTitle({commit}, data) {
            commit('SET_CADRE_TITLE', data)
        },
        setCadreBack({commit}, data) {
            commit('SET_BACK', data)
        },
    },
}

export default cadreListInfo

