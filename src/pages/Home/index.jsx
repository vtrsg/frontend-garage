import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageArea, SearchArea } from "./styled";
import Api from "../../helpers/garageApi";

import PageContainer from "../../components/PageContainer";
import AdItem from '../../components/partials/AdItem'

const Page = () => {
  const api = Api;

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };
    getStates();
  });
  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  });
  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: "asc",
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  });

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="SearchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                {stateList.map((i, k) => (
                  <option key={k} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
              <button>🔍</button>
            </form>
          </div>

        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          <h2>Anúncios Recentes</h2>
          <div className="list">
            {adList.map((i,k)=>
              <AdItem key={k} data={i}/>
            )}
          </div>
        </PageArea>
      </PageContainer>
    </>
  );
};

export default Page;
