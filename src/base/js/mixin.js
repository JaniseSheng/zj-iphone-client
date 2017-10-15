export const queryParams = {
  data() {
    return {
      params: {
        page: 1,
        pageSize: 10
      },
      query: false, // 标志位 判断是搜索还是所有数据
      pageNum: 0
    }
  }
}

