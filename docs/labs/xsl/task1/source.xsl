<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:a0="http://www.w3.org/1998/Math/MathML">
    <xsl:template match="/">
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block" margin-top="25px">
            <xsl:apply-templates/>
        </math>
    </xsl:template>
    <xsl:template match="строка">
        <a0:mrow>
            <xsl:apply-templates/>
        </a0:mrow>
    </xsl:template>
    <xsl:template match="операнд">
        <a0:mi>
            <xsl:value-of select="."/>
        </a0:mi>
    </xsl:template>
    <xsl:template match="оператор">
        <a0:mo>
            <xsl:value-of select="."/>
        </a0:mo>
    </xsl:template>
    <xsl:template match="корень">
        <a0:msqrt>
            <xsl:apply-templates/>
        </a0:msqrt>
    </xsl:template>
    <xsl:template match="дробь">
        <a0:mfrac>
            <xsl:apply-templates/>
        </a0:mfrac>
    </xsl:template>
    <xsl:template match="число">
        <a0:mn>
            <xsl:value-of select="."/>
        </a0:mn>
    </xsl:template>
    <xsl:template match="низверх">
        <a0:munderover>
            <xsl:apply-templates/>
        </a0:munderover>
    </xsl:template>
    <xsl:template match="верх">
        <a0:msup>
            <xsl:apply-templates/>
        </a0:msup>
    </xsl:template>
    <xsl:template match="низ">
        <a0:msub>
            <xsl:apply-templates/>
        </a0:msub>
    </xsl:template>
</xsl:stylesheet>
