const getStorageToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

export const createQuery = (Search , Pages, RowCount, Order, OrderBy,datefrom,dateTo,storeId) => {
    let query = {}
    query.token = getStorageToken();
    query.order_by = OrderBy || 'id';
    query.row_count = RowCount || 10;
    query.page = Pages || 1;
    query.order = Order || 'DESC';
    Search ? query.search = Search : query
    datefrom ? query.from_date = datefrom : query
    dateTo ? query.to_date = dateTo : query
    storeId ? query.by_store_id = storeId : query
    return query;
};