import { notification } from 'antd';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export default function showSnackBar(text:string, type: NotificationType='info') {
  notification[type]({
    message: text,
    showProgress: true,
    pauseOnHover: true,
    placement: 'bottom',
    // description:text,
  })
}
