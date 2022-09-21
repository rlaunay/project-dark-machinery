import NProgress from 'nprogress';

export function startLoader() {
  NProgress.start()
}

export function stopLoader() {
  NProgress.done()
}