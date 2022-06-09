; gk_zitierstile.nsi

; The name of the installer
Name "GK Zitierstile"

; The file to write
OutFile "..\..\..\..\.vuepress\public\downloads\gk_zitierstile.exe"

; The default installation directory
InstallDir $APPDATA\Microsoft\Bibliography\Style

; Request application privileges
RequestExecutionLevel user

;--------------------------------

; Pages

Page instfiles

;--------------------------------

; The stuff to install
Section "" ;No components page, name is not important

  ; Set output path to the installation directory.
  SetOutPath $INSTDIR

  ; Put file there
  File GK_Harvard.xsl
  File GK_Vancouver.xsl

SectionEnd ; end the section
