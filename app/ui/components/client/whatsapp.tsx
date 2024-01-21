import React from 'react';
import Image from 'next/image';

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
                    <Image
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
