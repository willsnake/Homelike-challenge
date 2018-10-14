export const callToApi = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ message: 'Login succeded!' });
    }, 1000),
  );
