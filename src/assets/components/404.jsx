            import React from  'react';
            import "../css/404.css";
            import "@fortawesome/fontawesome-free";
            
            const ErrorPage = () => {
              return (
                <section className="form d-flex justify-content-center align-items-center">
                  <div class="error">
                <div class="container-floud">
                    <div class="col-xs-12 ground-color text-center">
                        <div class="container-error-404">
                            <div class="clip"><div class="shadow"><span class="digit thirdDigit"></span></div></div>
                            <div class="clip"><div class="shadow"><span class="digit secondDigit"></span></div></div>
                            <div class="clip"><div class="shadow"><span class="digit firstDigit"></span></div></div>
                        </div>
                        <h2 class="h1">Sorry! Page not found</h2>
                    </div>
                </div>
            </div>
                </section>
              );
            };
            export default ErrorPage;