import Swal from 'sweetalert2';

/**
 * Utility to display alert messages.
 */
export default class AlertUtil {

  static info(message) {
    return Swal.fire(message)
  }

  static success(message) {
    return Swal.fire('Completado!', message, 'success')
  }

  static error(message) { 
    console.log(message)
    return Swal.fire('Error', message, 'error')
  }

  static handleError(error) {

  }
}


