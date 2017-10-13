set projectLocation=%projectLocation\RSComponet%

set classpath=%projectLocation%\lib\*

set execution=mvn integration-test

%execution%

pause
