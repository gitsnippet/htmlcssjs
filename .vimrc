set nobackup
set nowritebackup
set noundofile
set autochdir
set ambiwidth=double 
set tabstop=4
set sts=4
set expandtab
set softtabstop=4
set shiftwidth=4

set encoding=utf-8
set fileencoding=utf-8
set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1
set number

nnoremap <F12> :!/opt/google/chrome/chrome '%:p'<CR>
execute pathogen#infect()
execute pathogen#helptags()
syntax on

filetype plugin indent on
autocmd FileType html setlocal omnifunc=MyHTMLComplete
function! MyHTMLComplete(findstart, base)
    autocmd FileType javascript setlocal omnifunc=tern#Complete
    autocmd FileType php set omnifunc=phpcomplete#CompletePHP
    if search('<?php', 'bnW') > search('<script>', 'bnW')
        return phpcomplete#CompletePHP(a:findstart, a:base)
    else
        return tern#Complete(a:findstart,a:base)
    endif
endfunction
"imap . <C-X><C-O>

set nocompatible              " be iMproved, required
" Trigger configuration. Do not use <tab> if you use https://github.com/Valloric/YouCompleteMe.
let g:UltiSnipsExpandTrigger="<c-c>"
let g:UltiSnipsJumpForwardTrigger="<c-b>"
let g:UltiSnipsJumpBackwardTrigger="<c-z>"

" If you want :UltiSnipsEdit to split your window.
let g:UltiSnipsEditSplit="vertical"

function! CheckMark()
    hi! ChineseMark ctermbg=red  guibg=red
    match ChineseMark /[\u3000\uff01-\uff5e]/
endfunction
map <F5> :call CheckMark()<CR>

let mapleader = ","

autocmd BufRead *   exec "%s/\t/    /g" 

autocmd BufNewFile *.c,*.sh,*.rb,*.java,*.py   exec ":call SetTitle()" 
"定义函数SetTitle，自动插入文件头 
func SetTitle() 
    "如果文件类型为.sh文件 
    if &filetype == 'sh' 
        call setline(1,"\#!/bin/bash") 
        call append(line("."), "") 
    elseif &filetype == 'python'
        call setline(1,"#!/usr/bin/env python")
        call append(line("."),"# coding=utf-8")
        call append(line(".")+1, "")  
    elseif &filetype == 'ruby'
        call setline(1,"#!/usr/bin/env ruby")
        call append(line("."),"# encoding: utf-8")
        call append(line(".")+1, "")
    else 
        call setline(1, "/*************************************************************************") 
        call append(line("."),      " > File Name: ".expand("%")) 
        call append(line(".")+1, "  > Author: pengsir") 
        call append(line(".")+2, "  > Mail: 1248283536@qq.com") 
        call append(line(".")+3, "  > Created Time: ".strftime("%c")) 
        call append(line(".")+4, " ************************************************************************/") 
        call append(line(".")+5, "")
    endif
endfunc 
autocmd BufNewFile * normal G
let g:user_emmet_settings = webapi#json#decode(join(readfile(expand('~/.my_snippets.json')), "\n"))
let g:user_emmet_leader_key=','


let g:netrw_winsize = 30
nmap <silent> <leader>fe :Sexplore!<cr> 

chdir  /home/debian9/workspace

"let g:ale_sign_column_always = 1
"let g:ale_set_highlights = 0
""自定义error和warning图标
"let g:ale_sign_error = '✗'
"let g:ale_sign_warning = '⚡'
"""在vim自带的状态栏中整合ale
"let g:ale_statusline_format = ['✗ %d', '⚡ %d', '✔ OK']
""显示Linter名称,出错或警告等相关信息
""let g:ale_echo_msg_error_str = 'E'
""let g:ale_echo_msg_warning_str = 'W'
""let g:ale_echo_msg_format = '[%linter%] %s [%severity%]'
"""普通模式下，sp前往上一个错误或警告，sn前往下一个错误或警告
"nmap sp <Plug>(ale_previous_wrap)
"nmap sn <Plug>(ale_next_wrap)
""<Leader>s触发/关闭语法检查
""nmap <Leader>s :ALEToggle<CR>
"""<Leader>d查看错误或警告的详细信息
"
"set statusline=%F%m%r%h%w\ [FORMAT=%{&ff}]\ [TYPE=%Y]\ [POS=%l,%v][%p%%]\ %{strftime(\"%d/%m/%y\ -\ %H:%M\")}\ %{ALEGetStatusLine()}
"nmap <Leader>d :ALEDetail<CR>
"
" let g:user_emmet_settings ="/home/debian9/.my_snippets.json"
