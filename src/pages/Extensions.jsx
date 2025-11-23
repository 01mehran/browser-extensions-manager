// Components;
import Header from '@components/Header';
import ExtensionBox from '@components/ExtensionBox';

// Data;
import { extensionslist } from '@/data/ExtensionsList';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Extensions() {
  const [initilaExtensions, setInitialExtensions] = useState(() => {
    const savedExtensions = localStorage.getItem('extensions');
    return savedExtensions ? JSON.parse(savedExtensions) : extensionslist;
  });
  const [filteredExtensions, setFilteredExtensions] = useState([]);
  const [isActiveTab, setActiveTab] = useState(() => {
    return localStorage.getItem('tab') || 'all';
  });

  // Load data from LocalStorage;
  useEffect(() => {
    if (isActiveTab === 'all') {
      setFilteredExtensions(initilaExtensions);
    } else if (isActiveTab === 'active') {
      setFilteredExtensions(initilaExtensions.filter((ext) => ext.isActive));
    } else if (isActiveTab === 'inActive') {
      setFilteredExtensions(initilaExtensions.filter((ext) => !ext.isActive));
    }
  }, [initilaExtensions, isActiveTab]);

  // Remove extension;
  function handleRemoveExt(name) {
    setFilteredExtensions((prevExt) =>
      prevExt.filter((ext) => ext.name !== name),
    );
  }

  // Active / InActive extensions;
  function handleToggleExt(name) {
    const updated = initilaExtensions.map((ext) =>
      ext.name === name ? { ...ext, isActive: !ext.isActive } : ext,
    );

    setInitialExtensions(updated);
    localStorage.setItem('extensions', JSON.stringify(updated));
  }

  // Show all extensions;
  function showAllExt() {
    setActiveTab('all');
    localStorage.setItem('tab', 'all');

    setFilteredExtensions(initilaExtensions);
  }

  // Show active extensins;
  function showActiveExt() {
    setActiveTab('active');
    localStorage.setItem('tab', 'active');

    setFilteredExtensions(initilaExtensions.filter((ext) => ext.isActive));
  }

  // Show inActive extensions;
  function showInActiveExt() {
    setActiveTab('inActive');
    localStorage.setItem('tab', 'inActive');

    setFilteredExtensions(initilaExtensions.filter((ext) => !ext.isActive));
  }

  return (
    <div className="min-h-dvh bg-linear-[180deg,#ebf2fc_0%,#eef8f9_100%] px-2 pt-2 md:pt-3 dark:bg-linear-[180deg,#040918_0%,#091540_100%]">
      <section className="mx-auto lg:max-w-6xl xl:max-w-6xl">
        {/* Header */}
        <Header />
        <main className="mt-8">
          {/* Tabs */}
          <section className="flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            <article>
              <h2 className="text-primary-dark-800 dark:text-primary-light-200 text-xl font-bold">
                Extensions List
              </h2>
            </article>
            <article className="flex items-center space-x-3">
              <button
                className={`tabs ${isActiveTab === 'all' && 'active-tab'}`}
                onClick={showAllExt}
              >
                All
              </button>
              <button
                className={`tabs ${isActiveTab === 'active' && 'active-tab'}`}
                onClick={showActiveExt}
              >
                Active
              </button>
              <button
                className={`tabs ${isActiveTab === 'inActive' && 'active-tab'}`}
                onClick={showInActiveExt}
              >
                Inactive
              </button>
            </article>
          </section>

          {/* Extessions List */}
          <section className="mt-8 grid grid-cols-1 gap-4 px-1 pb-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredExtensions.map((ext) => (
              <ExtensionBox
                key={ext.name}
                extension={ext}
                handleRemoveExt={handleRemoveExt}
                handleToggleExt={handleToggleExt}
              />
            ))}
          </section>
        </main>
      </section>
    </div>
  );
}
