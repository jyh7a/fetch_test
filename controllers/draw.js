const data = {
  firstName: 'Fred',
  lastName: 'Flintstone',
};

var timesPerSecond = 5;
var wait = false;

document.addEventListener('mousemove', function () {
  if (!wait) {
    axiosCustom('post', '/index', data);

    wait = true;
    setTimeout(function () {
      wait = false;
    }, 1000 / timesPerSecond);
  }
});
