import React, { ChangeEvent, useState } from "react";
import CategoriesComponent from "src/components/CategoriesComponent";
import Container from "src/components/Container";
import HomeBanner from "src/components/HomeBanner";
import LandingBanner from "src/components/LandingBanner";
import { Loading } from "src/components/Loading";
import SearchComponent from "src/components/SearchComponent";
import { useAppState } from "src/lib/context";
import i18n from "src/lib/i18n";

const Home = (): JSX.Element => {
  const [formValue, setFormValue] = useState("");
  const [error, setError] = useState("");
  const { searchForFacts, loading } = useAppState();

  const labels = {
    search: i18n.t("search.search"),
    placeholder: i18n.t("search.search"),
    title: i18n.t("search.title"),
  };

  const onSubmit = async (): Promise<void> => {
    event?.preventDefault();
    if (formValue) {
      await searchForFacts(formValue);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const id = event.target.id;
    setError("");

    if (id === "search") {
      setFormValue(value);
    }
  };

  const properties = {
    formValue,
    onChange,
    onSubmit,
    labels,
    error,
    loading,
  };
  return (
    <Container>
      {loading && <Loading />}
      <LandingBanner />
      <HomeBanner />
      <SearchComponent properties={properties} />
      <CategoriesComponent />
    </Container>
  );
};

export default Home;
