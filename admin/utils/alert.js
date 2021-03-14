import Swal from 'sweetalert2';

/**
 * Utility to display alert messages.
 */
export default class AlertUtil {

  static info(message) {
    Swal.fire(message)
  }

  static success(message) {
    Swal.fire('Completado!', message, 'success')
  }

  static error(message) { 
    Swal.fire('Error', message, 'error')
  }

  static handleError(error) {

  }
}


