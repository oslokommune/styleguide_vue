// function copied from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
export const generateUuid = {
  methods: {
    generateUuid () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0
        var v = c == 'x' ? r : (r & 0x3 | 0x8) // eslint-disable-line eqeqeq
        return v.toString(16)
      })
    }
  }
}
