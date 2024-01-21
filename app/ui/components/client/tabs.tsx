
'use client'

import { Foto, About1, About2 } from "@/app/ui/components/containers/Perfil";
import { useState } from 'react'
import { Tab } from '@headlessui/react';
import styles from "@/app/ui/home.module.css"


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
  const categories = {
    Foto: [<Foto key={1} />],
    Tecnologias: [<About1 key={1} />],
    Acerca: [<About2 key={1} />],
  };

  return (
    <div className={styles.Tab}>
      <Tab.Group>
        <Tab.List className={styles.TabList}>
          {Object.keys(categories).map((category) => (
            <Tab
              className={styles.Tabkey}
              key={category}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={styles.Tabpanels}>
          {Object.values(categories).map((components, idx) => (
            <Tab.Panel
              key={idx}
            >
              {components.map((component: any, index) => (
                <div key={index} >
                  {component}
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
