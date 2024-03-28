// Phải viết hoa Component
// Higher Order Component là 1 function nhận một Component và return về1 Component mới 


/**
 * Dòng này đang import hai biến debug và log từ một tập tin hoặc module khác, được đặt tại đường dẫn ../constants.
 */
import { debug, log } from "../constants"

/**
 * Định nghĩa một interface TypeScript có tên là ExtraInfoType, mô tả các thuộc tính và kiểu dữ liệu của nó. 
 * Interface này có hai thuộc tính: debug với kiểu boolean và log .
 * là một hàm nhận vào bất kỳ giá trị nào và không trả về gì.
 */
export interface ExtraInfoType
{
  debug: boolean
  log: (value: any) => void
}

/**
 * Định nghĩa một hàm connect, 
 * được xuất ra mặc định (default export). 
 * Hàm này có một tham số kiểu generic <T>, 
 * và tham số này là một Component React có kiểu dữ liệu là T kết hợp với ExtraInfoType. 
 * Nói cách khác, hàm connect nhận vào một component React và bổ sung thêm 
 * các thuộc tính từ ExtraInfoType vào component đó.
 */
export default function connect<T>(Component: React.ComponentType<T & ExtraInfoType>) 
{
  /**
   * Hàm connect trả về một hàm khác nhận vào props của component gốc.
   * Trong trường hợp này, props này sẽ được loại bỏ các thuộc tính của ExtraInfoType
   * bằng cách sử dụng Omit (một tính năng trong TypeScript).
   */
  return function (props: Omit<T, keyof ExtraInfoType>)
  {
    const _props = props as T // Tạo một biến _props có kiểu là T, nơi mà props được chuyển đổi từ kiểu của component gốc sang kiểu generic T.
    return <Component {... _props} debug={debug} log={log}/> // Trả về một instance của component gốc, nhưng bổ sung thêm hai thuộc tính debug và log từ ExtraInfoType và các giá trị của chúng là debug và log được import từ file constants.
  }
}