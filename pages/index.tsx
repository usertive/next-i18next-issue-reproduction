import {I18nContext} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import {GetStaticProps} from 'next';
import {GetStaticPropsContext} from 'next/types';

const Homepage = () => {
  return (
    <I18nContext.Consumer>{
      ({i18n}) => i18n.t('test')
    }</I18nContext.Consumer>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}: GetStaticPropsContext) => ({
  props: {
    ...await serverSideTranslations(locale!, ['common', 'footer']),
  },
});

export default Homepage;
