import {memo} from 'react';

const LoginTemplate = memo(function LoginTemplate(backgroundImageUrl) {
        const backgroundStyles = (backgroundImageUrl) ? { background: `#040201 url(${backgroundImageUrl}) no-repeat center center / cover` } : { background: "transparent" };

        return( 
            <div>
                <div
                    style={backgroundStyles}
                >
                     <div>
                        {/* {children} */}
                    </div>
                </div>
            </div>
        );

});

export default LoginTemplate;