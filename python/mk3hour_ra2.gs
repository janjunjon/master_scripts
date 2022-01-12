*'sdfopen s20200704.nc'
'open ra3hour.ctl'

filename='ra202007050000.bin'

'set gxout fwrite'
'set undef dfile'
'set fwrite 'filename

'set x 1 241'
'set y 1 253'

*'set t 1'
*'d r1h(t=1)+r1h(t=2)+r1h(t=3)'
*'d r1h(t=4)+r1h(t=5)+r1h(t=6)'
*'d r1h(t=7)+r1h(t=8)+r1h(t=9)'
*'d r1h(t=10)+r1h(t=11)+r1h(t=12)'
*'d r1h(t=13)+r1h(t=14)+r1h(t=15)'
*'d r1h(t=16)+r1h(t=17)+r1h(t=18)'
*'d r1h(t=19)+r1h(t=20)+r1h(t=21)'
'd r1h(t=22)+r1h(t=23)+r1h(t=24)'

'disable fwrite'

reinit