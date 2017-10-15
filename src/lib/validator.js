export const mobile = (text = '请输入正确的手机号码') => {
  return {
      trigger: 'blur',
      validator(rule, value, callback) {
        let error = []
        if (!(/^1[34578]\d{9}$/.test(value))) {
          error.push(new Error(text))
        }
        callback(error);
      }
    }
}
export const empty = (text = '内容不能为空') => {
  return {
    trigger: 'blur',
    validator: (rule, value, callback) => {
      if (value === '') {
        callback(new Error(text))
      }
      callback()
    }
  }
}

export const textLength = (args) => {
  return {
    trigger: 'change',
    validator: (rule, value, callback) => {
      if (args.max && value.length > args.max) {
        const text = args.maxText ? args.maxText : `输入的最大数量为${args.max}`
        callback(new Error(text))
        return
      }
      if (args.min && value.length < args.min) {
        const text = args.minText ? args.minText : `输入的最小数量为${args.min}`
        callback(new Error(text))
        return
      }
      if (args.num && value.length != args.num) {
        const text = args.numText ? args.numText : `输入的文字长度应为${args.num}`
        callback(new Error(text))
        return
      }
      callback()
    }
  }
}

//正整数 包括零
export const number = (text = '输入正取的数字') => {
  return {
    trigger: 'blur',
    validator(rule, value, callback) {
      if (!/^[0-9]*$/.test(value)) {
        callback(new Error(text))
      }
      callback()
    }
  }
}
//正浮点数 包括零
export const flowNumber = (text = '输入正确的数字') => {
  return {
    trigger: 'blur',
    validator(rule, value, callback) {
      if (!/^\d+(\.\d+)?$/.test(value)) {
        callback(new Error(text))
      }
      callback()
    }
  }
}
