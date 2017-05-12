const ADD_TODO = 'ADD_TODO'
const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: setTimeout(() => { }), // 生成唯一 ID 的一种方式
        content,
        completed: false,
        createdAt: Date.now()
    }
})

export default {
    addTodo
}

export const ACTION_HANDLERS = {
    [ADD_TODO]: (todos, { payload }) => [...todos, payload]
}
