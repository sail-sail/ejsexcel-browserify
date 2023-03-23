/**
 * 渲染excel模板
 * @param exlBuf 模板excel的 Buffer, 若为string时，会调用fetch方法获取
 * @param _data_ 数据, 若为string时，会调用fetch方法获取
 */
export declare function renderExcel(exlBuf: Buffer | string, _data_: any): Promise<Buffer>;

/**
 * 渲染excel模板
 * @param exlBuf 模板excel的 Buffer, 若为string时，会调用fetch方法获取
 * @param _data_ 数据
 * @param cb 渲染成功后回调
 */
export declare function renderExcelCb(exlBuf: Buffer | string, _data_: any, cb: Function): void;
