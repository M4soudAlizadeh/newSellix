import { useState, useEffect } from "react";
import classes from "./Test.module.css";
import SellixClient from "../utils/SellixClient";

const Test = () => {
  // start Loading state
  const [isLoading, setIsLoading] = useState(true);
  // end Loading state

  // start states for data http
  const [reqPhoto, setReqPhoto] = useState({});
  const [reqUser, setReqUser] = useState({});
  const [reqComments, setReqComments] = useState({});
  // end states for data http

  // start state and handle functions for btns paginations
  const [btnNextPage, setBtnNextPage] = useState(2);
  const [btnPrevPage, setBtnPrevPage] = useState(0);
  const clickNextPageHandle = () => {
    setBtnNextPage((PrevBtnNextPage) => PrevBtnNextPage + 1);
    setBtnPrevPage((PrevBtnPrevPage) => PrevBtnPrevPage + 1);
  };
  const clickPrevPageHandle = () => {
    setBtnNextPage((PrevBtnNextPage) => PrevBtnNextPage - 1);
    setBtnPrevPage((PrevBtnPrevPage) => PrevBtnPrevPage - 1);
  };
  // end state and handle functions for btns paginations

  // start get data with SellixClient component function and store that and set isLoading
  useEffect(() => {
    setIsLoading(true);
    const httpHeaders = {
      method: "",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: "",
      // url: "",
      // function: "",
    };
    SellixClient(httpHeaders, "photos").sendRequest(setReqPhoto);
    SellixClient(httpHeaders, "users").sendRequest(setReqUser);
    SellixClient(httpHeaders, "comments").sendRequest(setReqComments);
    setIsLoading(false);
  }, []);

  const numbersArray = Array.from({ length: 20 }, (_, i) => i + 1);
  const containe = numbersArray.map((_, i) => {
    const obj = {
      Key: reqUser[i]?.username + reqUser[i]?.name + Math.random(),
      Title: reqUser[i]?.name,
      UserName: reqUser[i]?.username,
      Des: reqComments[i]?.body,
      Photo: reqPhoto[i]?.url,
      UserIcon: reqPhoto[i]?.thumbnailUrl,
    };
    return obj;
  });
  // end get data with SellixClient component function and store that and set isLoading

  // start load data in pages
  const containee = (page = 1) => {
    const start = (page - 1) * 5;
    const end = page * 5;
    return containe.slice(start, end);
  };
  const contain = containee(btnNextPage - 1);
  // end load data in pages

  return (
    <>
      {/* start Pagination btns*/}
      <div className={classes["pagination_container"]}>
        {btnPrevPage === 0 ? (
          ""
        ) : (
          <div>
            <button onClick={clickPrevPageHandle}>
              <div>
                <i className="fa fa-arrow-left"></i>
                <span>{btnPrevPage}</span>
              </div>
            </button>
          </div>
        )}
        <span>{btnNextPage - 1}</span>
        {btnNextPage === 5 ? (
          ""
        ) : (
          <div>
            <button onClick={clickNextPageHandle}>
              <div>
                <span>{btnNextPage}</span>
                <i className="fa fa-arrow-right"></i>
              </div>
            </button>
          </div>
        )}
      </div>
      {/* end Pagination btns */}
      {/* start Loading and posts container */}
      {isLoading ? (
        <div className={classes["loading_container"]}>
          <span>Loading ...</span>
        </div>
      ) : (
        <div className={classes["TestPage__ItemsContainer"]}>
          {contain.map((item, _) => {
            return (
              <div className={classes["TestPage__PostContainer"]}>
                <div className={classes["TestPage__PostContainer-head"]}>
                  <div
                    className={classes["TestPage__PostContainer-head_items"]}
                  >
                    <div
                      className={
                        classes[
                          "TestPage__PostContainer-head_items--detailuser"
                        ]
                      }
                    >
                      <img src={item.UserIcon} alt="user icon" />
                      <div>
                        <span
                          className={
                            classes[
                              "TestPage__PostContainer-head_items--detailuser_title"
                            ]
                          }
                        >
                          {item.Title}
                        </span>
                        <span>{"@" + item.UserName}</span>
                        <span>July 23</span>
                      </div>
                    </div>
                    <div>
                      <a href="_">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <span
                  className={classes["TestPage__PostContainer-description"]}
                >
                  {item.Des}
                </span>
                <div className={classes["TestPage__PostContainer-MainImage"]}>
                  <img src={item.Photo} alt={item.Title} />
                </div>
                <div
                  className={classes["TestPage__PostContainer-LinksContainer"]}
                >
                  <div>
                    <a href="_">
                      <i className="fa fa-comment"></i>
                    </a>
                    <span>200</span>
                  </div>
                  <div>
                    <a href="_">
                      <i class="fa fa-refresh"></i>
                    </a>
                    <span>20</span>
                  </div>
                  <div>
                    <a href="_">
                      <i class="fa fa-heart"></i>
                    </a>
                    <span>4k</span>
                  </div>
                  <div>
                    <a href="_">
                      <i class="fa fa-bar-chart"></i>
                    </a>
                    <span>890</span>
                  </div>
                  <div>
                    <a href="_">
                      <i class="fa fa-upload"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* end Loading and posts container */}
    </>
  );
};

export default Test;
