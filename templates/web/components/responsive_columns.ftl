<#macro dumpObject object debug=true>
    <#compress>
        <#if object??>
            <#attempt>
                <#if object?is_node>
                    <#if object?node_type == "text">${object?html}
                    <#else>&lt;${object?node_name}<#if object?node_type=="element" && object.@@?has_content><#list object.@@ as attr>
                        ${attr?node_name}="${attr?html}"</#list></#if>&gt;
                        <#if object?children?has_content><#list object?children as item>
                            <@dump_object object=item/></#list><#else>${object}</#if> &lt;/${object?node_name}&gt;</#if>
                <#elseif object?is_method>
                  #method
                <#elseif object?is_sequence>
                  [<#list object as item><@dump_object object=item/><#if !item?is_last>, </#if></#list>]
                <#elseif object?is_hash_ex>
                  {<#list object as key, item>${key?html}=<@dump_object object=item/><#if !item?is_last>, </#if></#list>}
                <#else>
                  "${object?string?html}"
                </#if>
                <#recover>
                    <#if !debug><!-- </#if>LOG: Could not parse object <#if debug><pre>${.error}</pre><#else>--></#if>
            </#attempt>
        <#else>
          null
        </#if>
    </#compress>
</#macro>

<div class="row mb-5">
    <#list contentModel.columns_o.item as column>
      <div class="col-md-${column.columnSize_s} mb-4">
          <#list column.content_o.item as component>
              <@dumpObject object=component />
<#--              <@renderComponent component=component.item />-->
          </#list>
      </div>
    </#list>
</div>
