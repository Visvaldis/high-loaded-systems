﻿/**
 * @author Ove Andersen
 * @version 1.0 April 2011
 * Updated by Olexander Valetsky on March 2013
 */
(function(){tinymce.PluginManager.requireLangPack('syntaxhighlighter');tinymce.create('tinymce.plugins.syntaxhighlighter',{init:function(ed,url){ed.addCommand('mceSyntaxHighlighter',function(){ed.windowManager.open({file:url+'/syntaxhighlighter.htm',width:530+ed.getLang('syntaxhighlighter.delta_width',0),height:590+ed.getLang('syntaxhighlighter.delta_height',0),inline:1},{plugin_url:url});});ed.addButton('syntaxhighlighter',{title:'syntaxhighlighter.syntaxhighlighter_button_desc',cmd:'mceSyntaxHighlighter',image:url+'/images/syntaxhighlighter.gif'});ed.onNodeChange.add(function(ed,cm,n){cm.setActive('syntaxhighlighter',n.nodeName=='syntaxhighlighter');});},createControl:function(n,cm){return null;},getInfo:function(){return{longname:'Syntax Highlighter Plugin',author:'Ove Andersen',version:"1.0"};}});tinymce.PluginManager.add('syntaxhighlighter',tinymce.plugins.syntaxhighlighter);})();