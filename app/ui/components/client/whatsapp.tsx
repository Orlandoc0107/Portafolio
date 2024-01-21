import React from 'react';

export default function Whatsapp() {
    const phoneNumber = '5493755378465';

    return (
        <div>
            <div>
                <a
                    href={`https://wa.me/${phoneNumber}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img
                        src="/icons/whatsapp.png"
                        width={40}
                        height={40}
                        alt='WhatsApp'
                    />
                </a>
            </div>
        </div>
    );
}
