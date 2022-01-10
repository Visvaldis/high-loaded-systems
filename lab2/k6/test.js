  import http from 'k6/http';
import { check } from 'k6';
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';
import * as utils from './utils.js'

export const options = {

    vus: 1,
   
    iterations: 1,
  
  };

  import { parseHTML } from 'k6/html';
import { sleep } from 'k6';

export default function () {
  const content = `
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />  
      <link rel="contents" title="Archive" href="/blog/archive" />  
      <link rel="start" title="Name of the blog" href="/blog/" />  
      <link type="application/rsd+xml" rel="edituri" title="RSD" href="http://localhost/blog/rsd.axd" />  
      <link type="application/rdf+xml" rel="meta" title="SIOC" href="http://localhost/blog/sioc.axd" />  
      <link type="application/apml+xml" rel="meta" title="APML" href="http://localhost/blog/apml.axd" />  
      <link type="application/rdf+xml" rel="meta" title="FOAF" href="http://localhost/blog/foaf.axd" />  
      <link type="application/rss+xml" rel="alternate" title="Name of the blog (RSS)"
          href="http://localhost/blog/syndication.axd" />  
      <link type="application/atom+xml" rel="alternate" title="Name of the blog (ATOM)"
          href="http://localhost/blog/syndication.axd?format=atom" />  
      <link type="application/opensearchdescription+xml" rel="search" title="Name of the blog"
          href="http://localhost/blog/opensearch.axd" />  
      <link href="/blog/Content/Auto/Global.css" rel="stylesheet" type="text/css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css" />
      <link href="Custom/Themes/Standard/css/styles.css" rel="stylesheet" />
      <link rel="shortcut icon" href="Content/images/blog/blogengine.ico" type="image/x-icon" />
      <link href="scripts/syntaxhighlighter/styles/shCore.css" rel="stylesheet" type="text/css" />
      <link href="scripts/syntaxhighlighter/styles/shThemeDefault.css" rel="stylesheet" type="text/css" />  <script
          type="text/javascript" src="/blog/en-us.res.axd"></script>  <script type="text/javascript"
          src="/blog/Scripts/Auto/01-jquery-1.9.1.min.js"></script>  <script type="text/javascript"
          src="/blog/Scripts/Auto/02-jquery.cookie.js"></script>  <script type="text/javascript"
          src="/blog/Scripts/Auto/04-jquery-jtemplates.js"></script>  <script type="text/javascript"
          src="/blog/Scripts/Auto/05-json2.min.js"></script>  <script type="text/javascript"
          src="/blog/Scripts/Auto/blog.js"></script>
      <script type="text/javascript" src="/blog/scripts/syntaxhighlighter/scripts/XRegExp.js"></script>
      <script type="text/javascript" src="/blog/scripts/syntaxhighlighter/scripts/shCore.js"></script>
      <script type="text/javascript" src="/blog/scripts/syntaxhighlighter/scripts/shAutoloader.js"></script>
      <script type="text/javascript" src="/blog/scripts/syntaxhighlighter/shActivator.js"></script>   
      <meta name="description"
          content="Name of the blog - Short description of the blog - Short description of the blog" />  
      <meta name="keywords" content="Blog,BlogEngine.NET" />  
      <meta name="author" content="My name" />
      <title> \tName of the blog | Short description of the blog </title>
  </head>

  <body class="ltr">
      <form method="post" action="/blog/" id="aspnetForm">
          <div class="aspNetHidden"> <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"
                  value="vz4GYC3WH9oYoOYv0zn0wHVpgyCVXtZtiLBOrOOFk57GCnRkwOOnltmoGWAg8sSwq0W9bDtag2K1HethHD+wKbKgclY=" />
          </div>
          <div class="wrapper">
              <header class="header text-uppercase">
                  <div class="container">
                      <div class="header-title float-left">
                          <h1><a href="http://localhost/blog/">Name of the blog</a></h1>
                          <p>Short description of the blog</p>
                      </div>
                      <nav class="header-nav float-right">
                          <ul>
                              <li><a href="http://localhost/blog/">Главная</a></li>
                              <li><a href="http://localhost/blog/archive">Архив</a></li>
                              <li><a href="http://localhost/blog/contact">Контакт</a></li>
                              <li><a href="/blog/Account/login.aspx" id="ctl00_aLogin">Войти</a></li>
                          </ul>
                      </nav>
                  </div>
              </header>
              <div class="container">
                  <div class="content-wrapper float-left">
                      <div id="ctl00_cphBody_divError"></div>
                      <div id="ctl00_cphBody_PostList1_posts" class="posts">
                          <article class="post post-home" id="post0">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 753 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>09 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0) </a>
                                  </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat,
                                  recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione
                                  voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit
                                  excepturi nihil harum alias ipsum culpa. Excepturi asperiores et maxime. Modi nemo
                                  est, minima hic distinctio maxime, architecto voluptatum quisquam eius, cupiditate ab
                                  aliquam ducimus labore. Placeat commodi molestias doloremque suscipit veritatis
                                  possimus, explicabo rerum temporibus, fugit iusto fuga reprehenderit optio dignissimos
                                  accusantium aliquid ratione num </section>
                          </article>
                          <article class="post post-home" id="post1">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 287 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>08 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0) </a> </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat,
                                  recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione
                                  voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit
                                  excepturi nihil harum alias ipsum culpa. Exce </section>
                          </article>
                          <article class="post post-home" id="post2">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 464 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>08 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0) </a> </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat,
                                  recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione
                                  voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit
                                  excepturi nihil harum alias ipsum culpa. Excepturi asperiores et maxime. Modi nemo
                                  est, minima hic distinctio maxime, architecto voluptatum quisquam eius, cupiditate ab
                                  aliquam ducimus labore. Placeat commodi molestias doloremque suscipit veritatis
                                  possimus, explicabo rerum temporibus, fugit iusto fuga reprehenderit optio dignissimos
                                  accusantium aliquid ratione numquam dolorem? Debitis impedit eos facere, odit sed
                                  assumenda iure accusan </section>
                          </article>
                          <article class="post post-home" id="post3">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 812 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>07 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0) </a>
                                  </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat,
                                  recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione
                                  voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit
                                  excepturi nihil harum alias ipsum culpa. Excepturi asperiores et maxime. Modi nemo
                                  est, minima hic distinctio maxime, </section>
                          </article>
                          <article class="post post-home" id="post4">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 589 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>06 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0) </a>
                                  </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat,
                                  recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione
                                  voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit
                                  excepturi nihil harum alias ipsum culpa. Excepturi asperiores et maxime. Modi nemo
                                  est, minima hic distinctio maxime, architecto voluptatum quisquam eius, cupiditate ab
                                  aliquam ducimus labore. Placeat commodi molestias doloremque suscipit veritatis
                                  possimus, explicabo rerum temporibus, fugit iusto fuga reprehenderit optio dignissimos
                                  accusantium aliquid ratione numquam dolorem? Debitis impedit eos facere, odit sed
                                  assumenda iure accusantium excepturi nobis earum id, harum velit saepe! Debitis ullam
                                  sapiente in harum sed blanditiis voluptatibus quas vel numquam error eligendi nam quae
                                  consequatur porro necessitatibus cum eo </section>
                          </article>
                          <article class="post post-home" id="post5">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 211 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>06 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0)
                                      </a> </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat,
                                  recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione
                                  voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit
                                  excepturi nihil harum alias ipsum culpa. Excepturi asperiores et maxime. Modi nemo
                                  est, minima hic distinctio maxime, architecto voluptatum quisquam eius, cupiditate ab
                                  aliquam ducimus labore. Placeat commodi molestias doloremque suscipit veritatis
                                  possimus, explicabo rerum temporibus, fugit iusto fuga reprehenderit optio dignissimos
                                  accusantium aliquid ratione numquam dolorem? Debitis impedit eos facere, odit sed
                                  assumenda iure accusantium excepturi nobis earum id, harum velit saepe! Debitis ullam
                                  sapiente in harum sed blanditiis voluptatibus quas vel numquam error eligendi nam quae
                                  consequat </section>
                          </article>
                          <article class="post post-home" id="post6">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 601 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>05 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0) </a> </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi m </section>
                          </article>
                          <article class="post post-home" id="post7">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 980 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>05 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0) </a> </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing
                              </section>
                          </article>
                          <article class="post post-home" id="post8">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post84">Post 26 of 1000 ||
                                          17:38:06</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>04 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post84#comment"> <i
                                              class="icon-comment"></i>(0) </a> </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat,
                                  recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione
                                  voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit
                                  excepturi nihil harum alias ipsum culpa. Excepturi asperiores et maxime
                              </section>
                          </article>
                          <article class="post post-home" id="post9">
                              <header class="post-header">
                                  <h2 class="post-title"> <a href="/blog/post/test-post100">Post 688 of 1000 ||
                                          17:41:01</a> </h2>
                                  <div class="post-info clearfix"> <span class="post-date"><i
                                              class="icon-calendar"></i>04 января 2022</span> <span
                                          class="post-author"><i class=" icon-user"></i><a
                                              href="http://localhost/blog/author/editor">editor</a></span> <span
                                          class="post-category"><i class=" icon-folder"></i></span> <a rel="nofollow"
                                          class="pull-right " href="/blog/post/test-post100#comment"> <i
                                              class="icon-comment"></i>(0) </a> </div>
                              </header>
                              <section class="post-body text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat,
                                  recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione
                                  voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit
                                  excepturi nihil harum alias ipsum culpa. Excepturi asperiores et maxime. Modi nemo
                                  est, minima hic distinctio maxime, architecto voluptatum quisquam eius, cu </section>
                          </article>
                      </div>
                      <div id="postPaging" style="display: none"> <a id="ctl00_cphBody_PostList1_hlPrev"
                              style="float:left">&lt;&lt; Older posts</a> <a id="ctl00_cphBody_PostList1_hlNext"
                              style="float:right">Новее &gt;&gt;</a> </div>
                      <div style="clear:both; display:block">
                          <ul id="PostPager">
                              <li class="PagerLinkDisabled">Новее</li>
                              <li class="PagerLinkCurrent">1</li>
                              <li class="PagerLink"><a href="/blog/?page=2">2</a></li>
                              <li class="PagerLink"><a href="/blog/?page=3">3</a></li>
                              <li class="PagerLink"><a href="/blog/?page=4">4</a></li>
                              <li class="PagerLink"><a href="/blog/?page=5">5</a></li>
                              <li class="PagerLink"><a href="/blog/?page=6">6</a></li>
                              <li class="PagerLink"><a href="/blog/?page=7">7</a></li>
                              <li class="PagerLink"><a href="/blog/?page=8">8</a></li>
                              <li class="PagerLink"><a href="/blog/?page=9">9</a></li>
                              <li class="PagerLink"><a href="/blog/?page=10">10</a></li>
                              <li class="PagerEllipses">...</li>
                              <li class="PagerLink"><a href="/blog/?page=131">131</a></li>
                              <li class="PagerLink"><a href="/blog/?page=132">132</a></li>
                              <li class="PagerLink"><a href="/blog/?page=2">Older posts</a></li>
                          </ul>
                      </div>
                  </div>
                  <aside class="sidebar-wrapper float-right">
                      <div id="widgetzone_be_WIDGET_ZONE" class="widgetzone">
                          <div class="widget search" id="widgetfb38ecdd-5813-4d10-8c5f-8d901c7c731e">
                              <div class="widget-content">
                                  <div id="searchbox"> <label for="txt-fb38ecdd-5813-4d10-8c5f-8d901c7c731e"
                                          style="display:none">Search</label><input type="text"
                                          value="Enter search term or APML url"
                                          id="txt-fb38ecdd-5813-4d10-8c5f-8d901c7c731e"
                                          onkeypress="if(event.keyCode==13) return BlogEngine.search('/blog/','txt-fb38ecdd-5813-4d10-8c5f-8d901c7c731e')"
                                          onfocus="BlogEngine.searchClear('Enter search term or APML url','txt-fb38ecdd-5813-4d10-8c5f-8d901c7c731e')"
                                          onblur="BlogEngine.searchClear('Enter search term or APML url','txt-fb38ecdd-5813-4d10-8c5f-8d901c7c731e')" /><input
                                          type="button" value="Поиск" id="searchbutton"
                                          onclick="BlogEngine.search('/blog/','txt-fb38ecdd-5813-4d10-8c5f-8d901c7c731e');"
                                          onkeypress="BlogEngine.search('/blog/','txt-fb38ecdd-5813-4d10-8c5f-8d901c7c731e');" />
                                  </div>
                              </div>
                          </div>
                          <div class="widget calendar" id="widgete02e41df-35d8-4572-a862-0dd0fb2fa504">
                              <h4 class="widget-header"> Calendar <span class="float-right"></span> </h4>
                              <div class="widget-content">
                                  <div style="text-align: center">
                                      <div id="calendarContainer">
                                          <table class="calendar" summary="" style=";border-collapse:collapse;">
                                              <tr>
                                                  <td><a
                                                          href="javascript:BlogEngine.Calendar.nav('2021-12-09')">&lt;&lt;</a>&nbsp;&nbsp;
                                                  </td>
                                                  <td style="text-align:center;width:100px">Январь 2022</td>
                                                  <td align="right">&nbsp;&nbsp;&gt;&gt;</td>
                                              </tr>
                                          </table>
                                          <table
                                              id="ctl00_widgetContainere02e41df35d84572a8620dd0fb2fa504_e02e41df35d84572a8620dd0fb2fa504_PostCalendar1"
                                              class="calendar" cellspacing="0" cellpadding="2" summary="Post calendar"
                                              title="Календарь" style="border-width:0px;border-collapse:collapse;"> \t
                                              <tr>
                                                  <th align="center" abbr="понедельник" scope="col">Пн</th>
                                                  <th align="center" abbr="вторник" scope="col">Вт</th>
                                                  <th align="center" abbr="среда" scope="col">Ср</th>
                                                  <th align="center" abbr="четверг" scope="col">Чт</th>
                                                  <th align="center" abbr="пятница" scope="col">Пт</th>
                                                  <th align="center" abbr="суббота" scope="col">Сб</th>
                                                  <th align="center" abbr="воскресенье" scope="col">Вс</th>
                                              </tr>
                                              <tr>
                                                  <td class="other" align="center" style="width:14%;"><a
                                                          href="/blog/2021/12/27/default" class="exist">27</a></td>
                                                  <td class="other" align="center" style="width:14%;"><a
                                                          href="/blog/2021/12/28/default" class="exist">28</a></td>
                                                  <td class="other" align="center" style="width:14%;"><a
                                                          href="/blog/2021/12/29/default" class="exist">29</a></td>
                                                  <td class="other" align="center" style="width:14%;">30</td>
                                                  <td class="other" align="center" style="width:14%;"><a
                                                          href="/blog/2021/12/31/default" class="exist">31</a></td>
                                                  <td class="weekend" align="center" style="width:14%;"><a
                                                          href="/blog/2022/01/01/default" class="exist">1</a></td>
                                                  <td class="weekend" align="center" style="width:14%;"><a
                                                          href="/blog/2022/01/02/default" class="exist">2</a></td>
                                              </tr>
                                              <tr>
                                                  <td align="center" style="width:14%;"><a
                                                          href="/blog/2022/01/03/default" class="exist">3</a></td>
                                                  <td align="center" style="width:14%;"><a
                                                          href="/blog/2022/01/04/default" class="exist">4</a></td>
                                                  <td align="center" style="width:14%;"><a
                                                          href="/blog/2022/01/05/default" class="exist">5</a></td>
                                                  <td align="center" style="width:14%;"><a
                                                          href="/blog/2022/01/06/default" class="exist">6</a></td>
                                                  <td align="center" style="width:14%;"><a
                                                          href="/blog/2022/01/07/default" class="exist">7</a></td>
                                                  <td class="weekend" align="center" style="width:14%;"><a
                                                          href="/blog/2022/01/08/default" class="exist">8</a></td>
                                                  <td class="weekend" align="center" id="today" style="width:14%;"><a
                                                          href="/blog/2022/01/09/default" class="exist">9</a></td>
                                              </tr>
                                              <tr>
                                                  <td align="center" style="width:14%;">10</td>
                                                  <td align="center" style="width:14%;">11</td>
                                                  <td align="center" style="width:14%;">12</td>
                                                  <td align="center" style="width:14%;">13</td>
                                                  <td align="center" style="width:14%;">14</td>
                                                  <td class="weekend" align="center" style="width:14%;">15</td>
                                                  <td class="weekend" align="center" style="width:14%;">16</td>
                                              </tr>
                                              <tr>
                                                  <td align="center" style="width:14%;">17</td>
                                                  <td align="center" style="width:14%;">18</td>
                                                  <td align="center" style="width:14%;">19</td>
                                                  <td align="center" style="width:14%;">20</td>
                                                  <td align="center" style="width:14%;">21</td>
                                                  <td class="weekend" align="center" style="width:14%;">22</td>
                                                  <td class="weekend" align="center" style="width:14%;">23</td>
                                              </tr>
                                              <tr>
                                                  <td align="center" style="width:14%;">24</td>
                                                  <td align="center" style="width:14%;">25</td>
                                                  <td align="center" style="width:14%;">26</td>
                                                  <td align="center" style="width:14%;">27</td>
                                                  <td align="center" style="width:14%;">28</td>
                                                  <td class="weekend" align="center" style="width:14%;">29</td>
                                                  <td class="weekend" align="center" style="width:14%;">30</td>
                                              </tr>
                                              <tr>
                                                  <td align="center" style="width:14%;">31</td>
                                                  <td class="other" align="center" style="width:14%;">1</td>
                                                  <td class="other" align="center" style="width:14%;">2</td>
                                                  <td class="other" align="center" style="width:14%;">3</td>
                                                  <td class="other" align="center" style="width:14%;">4</td>
                                                  <td class="other" align="center" style="width:14%;">5</td>
                                                  <td class="other" align="center" style="width:14%;">6</td>
                                              </tr>
                                          </table>
                                      </div>
                                      <script type="text/javascript">
                                          function setupBlogEngineCalendar() {
                                              BlogEngine.Calendar = {
                                                  \
                                                  t months: {},
                                                  \t nav: function (date) {
                                                      \
                                                      t\ t
                                                      var m = BlogEngine.Calendar.months;\
                                                      t\ t
                                                      if (m[date] == null || m[date] == 'undefined') {
                                                          \
                                                          t\ t\ t WebForm_DoCallback(
                                                              'ctl00$widgetContainere02e41df35d84572a8620dd0fb2fa504$e02e41df35d84572a8620dd0fb2fa504$PostCalendar1',
                                                              date, BlogEngine.updateCalendar, date, null,
                                                              false)\ t\ t
                                                      } else {
                                                          \
                                                          t\ t\ t BlogEngine.updateCalendar(m[date], date);\
                                                          t\ t
                                                      }\
                                                      t
                                                  }
                                              };
                                          }
                                      </script> <br /> <a href="http://localhost/blog/calendar/default.aspx">Большой
                                          календарь</a>
                                  </div>
                              </div>
                          </div>
                          <div class="widget categorylist" id="widgetdd0a6215-8f33-441e-83c8-9f2ae0abae27">
                              <h4 class="widget-header"> Category list <span class="float-right"></span> </h4>
                              <div class="widget-content">
                                  <ul id="categorylist">
                                      <li><a href="/blog/category/feed/BlogEngineNET" rel="nofollow"><img
                                                  src="/blog/Content/images/blog/rssButton.png"
                                                  alt="RSS feed for BlogEngine.NET" class="rssButton" /></a><a
                                              href="/blog/category/BlogEngineNET"
                                              title="Категория: BlogEngine.NET">BlogEngine.NET (1)</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div class="widget tagcloud" id="widget8d2f6869-e27d-4585-bada-a9cc84f0978a">
                              <h4 class="widget-header">
                                  Tag cloud <span class="float-right"></span> </h4>
                              <div class="widget-content">
                                  <ul
                                      id="ctl00_widgetContainer8d2f6869e27d4585badaa9cc84f0978a_8d2f6869e27d4585badaa9cc84f0978a_ulTags">
                                      <li><a href="http://localhost/blog/?tag=blog" class="biggest"
                                              title="Tag: blog">blog</a> </li>
                                      <li><a href="http://localhost/blog/?tag=welcome" class="biggest"
                                              title="Tag: welcome">welcome</a> </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="widget pagelist" id="widgetdc246169-0320-459f-a181-0f7f423dfbb5">
                              <h4 class="widget-header"> Page List <span class="float-right"></span>
                              </h4>
                              <div class="widget-content">
                                  <ul id="pagelist" class="pagelist">
                                      <li><a href="/blog/page/example-page">Example page</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div class="widget monthlist" id="widgete0437d2e-de82-4f51-b679-f162fc01b20c">
                              <h4 class="widget-header"> Month List <span class="float-right"></span> </h4>
                              <div class="widget-content">
                                  <ul id="monthList"> \t<li class="year"
                                          onclick="BlogEngine.toggleMonth(&#39;year2015&#39;)">2015<ul id="year2015">
                                              \t\t<li><a href="/blog/2015/09/default">Сентябрь</a> (1)</li> \t</ul>
                                      </li>
                                      <li class="year" onclick="BlogEngine.toggleMonth(&#39;year2019&#39;)">2019<ul
                                              id="year2019"> \t\t<li><a href="/blog/2019/12/default">Декабрь</a> (1)
                                              </li> \t</ul>
                                      </li>
                                      <li class="year" onclick="BlogEngine.toggleMonth(&#39;year2020&#39;)">2020<ul
                                              id="year2020"> \t\t<li><a href="/blog/2020/01/default">Январь</a> (44)
                                              </li>
                                              <li><a href="/blog/2020/02/default">Февраль</a> (43)</li>
                                              <li><a href="/blog/2020/03/default">Март</a> (48)</li>
                                              <li><a href="/blog/2020/04/default">Апрель</a> (54)</li>
                                              <li><a href="/blog/2020/05/default">Май</a> (45)</li>
                                              <li><a href="/blog/2020/06/default">Июнь</a> (40)</li>
                                              <li><a href="/blog/2020/07/default">Июль</a> (53)</li>
                                              <li><a href="/blog/2020/08/default">Август</a> (40)</li>
                                              <li><a href="/blog/2020/09/default">Сентябрь</a> (47)</li>
                                              <li><a href="/blog/2020/10/default">Октябрь</a> (42)</li>
                                              <li><a href="/blog/2020/11/default">Ноябрь</a> (52)</li>
                                              <li><a href="/blog/2020/12/default">Декабрь</a> (51)</li> \t
                                          </ul>
                                      </li>
                                      <li class="year" onclick="BlogEngine.toggleMonth(&#39;year2021&#39;)">2021<ul
                                              id="year2021"> \t\t<li><a href="/blog/2021/01/default">Январь</a> (63)
                                              </li>
                                              <li><a href="/blog/2021/02/default">Февраль</a> (62)</li>
                                              <li><a href="/blog/2021/03/default">Март</a> (62)</li>
                                              <li><a href="/blog/2021/04/default">Апрель</a> (54)</li>
                                              <li><a href="/blog/2021/05/default">Май</a> (66)</li>
                                              <li><a href="/blog/2021/06/default">Июнь</a> (64)</li>
                                              <li><a href="/blog/2021/07/default">Июль</a> (62)</li>
                                              <li><a href="/blog/2021/08/default">Август</a> (40)</li>
                                              <li><a href="/blog/2021/09/default">Сентябрь</a> (63)</li>
                                              <li><a href="/blog/2021/10/default">Октябрь</a> (60)</li>
                                              <li><a href="/blog/2021/11/default">Ноябрь</a> (73)</li>
                                              <li><a href="/blog/2021/12/default">Декабрь</a> (68)</li> \t
                                          </ul>
                                      </li>
                                      <li class="year" onclick="BlogEngine.toggleMonth(&#39;year2022&#39;)">2022<ul
                                              id="year2022" class="open"> \t\t<li><a
                                                      href="/blog/2022/01/default">Январь</a> (16)</li> \t</ul>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="widget authorlist" id="widgetaecb8218-37d0-4b1c-989e-9bddc027ad09">
                              <h4 class="widget-header"> AuthorList <span class="float-right"></span> </h4>
                              <div class="widget-content">
                                  <ul id="authorlist" class="authorlist">
                                      <li><a href="/blog/syndication.axd?author=Admin" rel="nofollow"><img
                                                  src="http://www.gravatar.com/avatar/6d639091c771c54398e476fbbabb2ce4.jpg?d=identicon"
                                                  alt="author avatar" width="32" height="32"
                                                  class="author-avatar" /></a><a href="/blog/author/Admin"
                                              title="Author: Admin" class="authorlink">Admin (1)</a></li>
                                      <li><a href="/blog/syndication.axd?author=editor" rel="nofollow"><img
                                                  src="http://www.gravatar.com/avatar/ca35f5ab088451c40b255bae24a33617.jpg?d=identicon"
                                                  alt="author avatar" width="32" height="32"
                                                  class="author-avatar" /></a><a href="/blog/author/editor"
                                              title="Author: editor" class="authorlink">editor (1313)</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </aside>
              </div>
          </div>
          <footer class="footer">
              <div class="container">
                  <p class="copyright float-left"> <span>Copyright &copy; 2022 - <a href="http://localhost/blog/">Name
                              of the blog</a></span> <span>Powered by <a href="http://dotnetblogengine.net"
                              target="_blank" title="BlogEgine.NET 3.2.0.3">BlogEngine.NET</a> </span> </p>
                  <ul class="float-right list-unstyled social-network">
                      <li><a href="" rel="external nofollow"><i class="icon-facebook"></i></a></li>
                      <li><a href="" rel="external nofollow"><i class="icon-twitter"></i></a></li>
                      <li><a href="" rel="external nofollow"><i class="icon-gplus"></i></a></li>
                      <li><a href="" rel="external nofollow"><i class="icon-linkedin"></i></a></li>
                      <li><a href="/syndication.axd" rel="external nofollow"><i class="icon-rss"></i></a></li>
                  </ul>
              </div>
          </footer>
          <div class="aspNetHidden"> \t<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR"
                  value="2A426DAC" /> \t<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
                  value="GbdMe3e4fLiKaWnNNRdRnYnFI3p66KZzC1BuHsTjORJvfzcZYP3TQs0zDmXWRR56U6l3N5OfFabDq9jcEzlnQKkp68gKidBfs0wb+Mi/quOjaqhNxEy7Sf25cE7iVfXORZNyKykyDTotn+zNj1g7ywt3hM3AeZzNkiIeEzaf7bKGzT0rMCCKZVRrh6/8/1qXLmive88jH6khH7ndIOBuJFyFK9vDmPczxPdZYGDVa3Q8Cs29p6u2meHlQNzcA1wtLOjdMimcMnm7n3CUUDVX8rV/+q+sxc4x5l54Twoq1EAaaTU1yBSknQIKOkB/SINkIZWysAWf9n5LAYAe1wbYgs9eAR2Qs1Oa7J9Gg1Grqylq6VP9XDlffbJMtK43b8v4bijN2ZiYHeko1xrCa+GMtM0SMhSuKqquTUntQvp1CfuWch5xkQHwIaAlIO7ikYWI5pjpWy/YHmZmxSIH8nyVhPcLRmvs9PgjGYGbluODkT27kBA1/dZtsN6na77rG5ePoZaO/RVJekQLH6K0etDSp+vvRqo2udzHCywnhvmUOI/44DPkc10/81uQ5U9gzuAYVn2asO7klEfQ3S9HHd3Ch80QFxtTKFhsvsIcCd1twVeIg1H9oNn/2kxg6N6kEnAaCqR1cwCG9TmFD0sFLwI+1/CdVB+eXHTx/uTgarFaDL6tANJpYZBON4fuFlB2NP995wRlOzqeKC2dw4OgFnTw76SBp5o+osq1zqdbqHSHIXnT378jMlkh8iZZpBaAoc+ZVFptPy431OKdUR7z8oU9L1qSB/ZbKleXe87RegN6ehqijYgLtztEXLp7lyL//bP0e5wdSCLtunQDPmE+4ayJ7pMsdEhB2BT+lN3YHFL2EF6gV/G1k4d4g/ULC83wCmgFqFmEVf5LO3nYANwb7ZJ3Kn/8USlTOmnOFSG+A3+MBiErYw/h14l+dxxLp3CLcsTS+5HVvQtLigkZuvYIokr6X5PJ8UI=" />
          </div> \n<script type="text/javascript">
              \
              n //<![CDATA[ \nBlogEngine.addLoadEvent(setupBlogEngineCalendar); \n//]]> \n
          </script> \n
      </form>
  </body>

  </html>
  `;
  const doc = parseHTML(content);
  const sel = doc.find('div.posts').children().toArray();

  //utils.log(randomItem(sel).children().first().children().first().children().first().attr("href"));
  //console.log(utils.camelize('Post  1 of 1000 17:36'));
  
  let postsOnPage = doc.find('div.posts').children().toArray();
  let randomPost = randomItem(postsOnPage);
  let postUrl = randomPost.children().first().children().first().children().first().attr("href");
  let postTitle = randomPost.children().first().children().first().children().first().html();
  console.log(postUrl, postTitle)                                

  let authheader = utils.getAuthHeaders(true);
  authheader.headers['Content-Type'] = "application/x-www-form-urlencoded";
                                    
  let data = {
    __EVENTTARGET:  "",
    __EVENTARGUMENT:  "",
    __VIEWSTATE:  "XeuvrE/GF7OIgsdbuZtJTI1ZXMPusX0SA5s03/ZtrcCv/QB51jM++d1H+wQmu2LMLUTaE68nWSUp7VliwW9cALSp6OUUN+ycfm0swwIsDyhaVYz8EcS8+j/bhzFaN0xQun5f8cJJz21uJky+URHPmuKN6zB+jugqK4Qtpccw9Fm2YrqJVKowuvfk1hePiW08V7jHqA==",
    txtName:  "",
    txtContent:  "",
    ctl00$cphBody$ucCommentList$hiddenReplyTo:  "",
    simpleCaptchaValue:  "",
    ctl00$cphBody$ucCommentList$hfCaptcha:  "e553e882-963c-431f-809d-84c1baea2d32",
    __VIEWSTATEGENERATOR:  "0DB23B8C",
    __CALLBACKID:  "ctl00$cphBody$ucCommentList",
    __CALLBACKPARAM:  "Jonny-|-jon.ny@mail.com-|--|--|-Maaaan, thats rocks!-|-false-|-false-|-e553e882-963c-431f-809d-84c1baea2d32-|--|--|--|--|-10",
    __EVENTVALIDATION:  "zfB/StUsGJoLU5JFxsv8TzGSV5goyd8ucgXgqxOTTIxx93DGWu4mSB+8KsF+tiEep5jyzUCp8Hw/5VHSAeFdMI+NQfNgVU5kQBqX0WdY71cxlvLn8aEWjfxLUJJRkWGu9UYk23VlxU5tAnAkGCaqyj74z+eupHSI64v9mQef54vErcVrW7i5tJWBItllviwwiHuKRj4JM5K4DtPEfiRI65VUGvr7PTSGz54Kif3HW4vJ1jGgZ4hlROXl8r037OqzJZRDLcI57naVmU9bz6r/t8E3zmxBMvf5dI5rEdBa7631N6uBOkQXtJyfdD0qE4nrMCxjG5uHyj5Wis/NsFJBg2kkAISGnPWhtzNJPw8XxR+/Ca4SPB2Ok9Wur9ypkUmeAd5XegKghN+YhJfiZngP/lvisszJU6mx9hHpFa8ENgvtyyXr9gVimcw2NXf1Bga5eIaqN+Yt4nviKVI72ww4ur8pzQ9YVa7j2NkyvszES/UEXLQWFOEVB3XpIXqUxhcsP5At1I/zBEyNL1rA1oGGDoTqBmsFfndbfQjmDIvQH/kLvMHVzHsyIKn8P6bn9qWeqYnBm9RO+nqqdnHnklwv6FofJNMVLxQL2NfJVoo+gojP2J6z+K3ai4tP1FZw1CTKWWZ0keqk+PsBFgS7rDgwGjf2wVmyfNkQZo1gI6Ir1VdHeNnFiI2fDgLmhSkd31i5HFy956JcjiavRy7JGqy8jnOTHj92SRsqaO5Tz1Ml3CSfV4HvEjyRXccL7D74D7n5NMSt+Mg5DGpcSKJYlvpAKNlXH3dfxnTtJywRXjdbsA053NvPKp/l/zJM3mzVL0TflayHvzJWh/+D9I2DioNbdwdZ2ViTyMvpRhgacwANsFmdqhrLLKuQqWGumzwm0sR4UblO/byuHSb5nf8Kae1xZ9Npj5yPgc+WRYVgjSG5EI3UW760zg6/22KwEHR5Cf/xRrqEeTsvRAbmGslw6PqdkxkGVJCutU/pnAuPtD5pC50leWx0o6pKr4Rsxvucx2TIioePEQ=="
    
  }                                        
  const res = http.post('http://localhost/blog/post/post773Of1000_22_5620', data, authheader);
  utils.log(res)

}


  /*
  export default function () {

    const loginRes = http.get('http://localhost/blog/Account/login.aspx');
    let vsId = "id=\"__VIEWSTATE\" value=\"";
    let viewstate = loginRes.body.substring(loginRes.body.indexOf(vsId)+vsId.length,loginRes.body.indexOf(vsId)+vsId.length+176 )
    
    let evId = "id=\"__EVENTVALIDATION\" value=\"";
    let eventValidation = loginRes.body.substring(loginRes.body.indexOf(evId)+evId.length,loginRes.body.indexOf(evId)+evId.length+176 )

    console.log(viewstate, "\n", eventValidation, "\n", viewstate.length, eventValidation.length);

    
    let formData = {
      __VIEWSTATE: viewstate,
      __VIEWSTATEGENERATOR:"B42CDBE2",
      __EVENTVALIDATION: eventValidation, 
      ctl00$MainContent$LoginUser$UserName:"editor",
      ctl00$MainContent$LoginUser$Password:"editor",
      ctl00$MainContent$LoginUser$LoginButton:"Войти"
      };

    let strData = `----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="__VIEWSTATE"
    
    zmMUZg0KEkPKPoCGGkAJaat/mqISelBRtsz6STky0e42VaxYBYlrdsFDTkQD19UW5v/+u7Hv7XopzMNfTGqdBiwmkL37jujO8HbOZ4I7fBkVmI80KgiKB54AYKJlHI0IstAzyW76jUm2qT/OJfkN6OMRRbsQEQNDU6ivqy9E5lXSS6Mk
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="__VIEWSTATEGENERATOR"
    
    B42CDBE2
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="__EVENTVALIDATION"
    
    hbN6VR9zOurYxGrVTNXSRJWn20Cd4wLm0TnPtOUrs035hFtQ/80KUfGY4qNUHqXlo0XsV64pXsI9umZRc7ze/nsS+jeM5WGVgnyRerkQ3cJvEKM4jNkJal+FKya5M0qWDhNWkPJTBNgY8thv0vhC3h/Eevka1QZ9oKQHAV6j79C+73Ib
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="ctl00$MainContent$LoginUser$UserName"
    
    editor
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="ctl00$MainContent$LoginUser$Password"
    
    editor
    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="ctl00$MainContent$LoginUser$LoginButton"
    
    Войти
    ----WebKitFormBoundary7MA4YWxkTrZu0gW`;
    const res = http.post('http://localhost/blog/Account/login.aspx',strData, { headers: { 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' } });
    
    console.log(JSON.stringify(res, null, "\t"));

  }

  */