render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Dropdown
          loading={this.props.loading} 
          onSearchChange={this.props.onChange} 
          onChange={this.handleDropdownChange} 
          placeholder={this.props.label} 
          search selection 
          onFocus={this.onFocus}
          options={this.state.suggestedLocations} 
          open={this.state.isDropdownOpen || false} 
          icon={<span></span>}
/>
        <Button icon>
          <Icon name='search'/> 