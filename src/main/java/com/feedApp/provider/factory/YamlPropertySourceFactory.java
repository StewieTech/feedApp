package com.feedApp.provider.factory;


import java.io.IOException;
import java.util.Properties;

import org.springframework.beans.factory.config.YamlPropertiesFactoryBean;
import org.springframework.core.env.PropertiesPropertySource;
import org.springframework.core.env.PropertySource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.EncodedResource;
import org.springframework.core.io.support.PropertySourceFactory;
import org.springframework.lang.Nullable;
import org.springframework.util.StringUtils;
import org.springframework.beans.factory.annotation.Value ;

public class YamlPropertySourceFactory implements PropertySourceFactory {
    @Override
    public PropertySource<?> createPropertySource(@Nullable String name, EncodedResource resource) throws IOException {
        Properties loadedProperties = this.loadYamlIntoProperties(resource.getResource());

        return new PropertiesPropertySource((StringUtils.hasLength(name)) ? name : resource.getResource().getFilename(), loadedProperties);
    }

    private Properties loadYamlIntoProperties(Resource resource) {
        YamlPropertiesFactoryBean factory = new YamlPropertiesFactoryBean();
        factory.setResources(resource);
        factory.afterPropertiesSet();

        return factory.getObject();
    }


    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    @Value("${jwt.issuer}")
    private String jwtIssuer;

    @Value("${jwt.audience}")
    private String jwtAudience;

    @Value("${jwt.prefix}")
    private String jwtPrefix;

    @Value("${jwt.excluded.urls}")
    private String[] jwtExcludedUrls;

    @Value("${client.url}")
    private String clientUrl;

    @Value("${client.email.verify.param}")
    private String clientVerifyParam;

    @Value("${client.email.verify.expiration}")
    private long clientVerifyExpiration;

    @Value("${client.email.reset.param}")
    private String clientResetParam;

    @Value("${client.email.reset.expiration}")
    private long clientResetExpiration;

    @Value("${h2.server.params}")
    private String[] h2ServerParams;

    public long getJwtExpiration() {
        return jwtExpiration;
    }

    public void setJwtExpiration(long jwtExpiration) {
        this.jwtExpiration = jwtExpiration;
    }

    public String getJwtSecret() {
        return jwtSecret;
    }

    public void setJwtSecret(String jwtSecret) {
        this.jwtSecret = jwtSecret;
    }

    public String getJwtIssuer() {
        return jwtIssuer;
    }

    public void setJwtIssuer(String jwtIssuer) {
        this.jwtIssuer = jwtIssuer;
    }

    public String getJwtAudience() {
        return jwtAudience;
    }

    public void setJwtAudience(String jwtAudience) {
        this.jwtAudience = jwtAudience;
    }

    public String getJwtPrefix() {
        return jwtPrefix;
    }

    public void setJwtPrefix(String jwtPrefix) {
        this.jwtPrefix = jwtPrefix;
    }

    public String[] getJwtExcludedUrls() {
        return jwtExcludedUrls;
    }

    public void setJwtExcludedUrls(String[] jwtExcludedUrls) {
        this.jwtExcludedUrls = jwtExcludedUrls;
    }

    public String getClientUrl() {
        return clientUrl;
    }

    public void setClientUrl(String clientUrl) {
        this.clientUrl = clientUrl;
    }

    public String getClientVerifyParam() {
        return clientVerifyParam;
    }

    public void setClientVerifyParam(String clientVerifyParam) {
        this.clientVerifyParam = clientVerifyParam;
    }

    public long getClientVerifyExpiration() {
        return clientVerifyExpiration;
    }

    public void setClientVerifyExpiration(long clientVerifyExpiration) {
        this.clientVerifyExpiration = clientVerifyExpiration;
    }

    public String getClientResetParam() {
        return clientResetParam;
    }

    public void setClientResetParam(String clientResetParam) {
        this.clientResetParam = clientResetParam;
    }

    public long getClientResetExpiration() {
        return clientResetExpiration;
    }

    public void setClientResetExpiration(long clientResetExpiration) {
        this.clientResetExpiration = clientResetExpiration;
    }

    public String[] getH2ServerParams() {
        return h2ServerParams;
    }

    public void setH2ServerParams(String[] h2ServerParams) {
        this.h2ServerParams = h2ServerParams;
    }
}
