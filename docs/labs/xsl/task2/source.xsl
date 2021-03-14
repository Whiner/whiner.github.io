<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <root>
            <xsl:apply-templates/>
        </root>
    </xsl:template>
    <xsl:template match="графика">
        <svg width="{@ширина}px" height="{@высота}px" xmlns="http://www.w3.org/2000/svg">
            <xsl:apply-templates/>
        </svg>
    </xsl:template>
    <xsl:template match="эллипс">
        <ellipse id="{@id}" fill="{@заливка}" stroke="{@ободок}" stroke-width="{@ширина-ободка}" cx="{@cx}" cy="{@cy}"
                 rx="{@rx}"
                 ry="{@ry}" xmlns="http://www.w3.org/2000/svg">
            <xsl:apply-templates/>
        </ellipse>
    </xsl:template>
</xsl:stylesheet>
