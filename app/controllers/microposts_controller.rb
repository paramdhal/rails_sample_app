class MicropostsController < ApplicationController
    before_filter :signed_in_user

    def create
        @micropost = current_user.microposts.build(params[:micropost])
        if @micropost.save
            flash[:sucsess] = "Micropost created!"
            redirect_to root_url
        else
            @feed_items = current_user.feed.paginate(page: params[:page])
            render 'static_pages/home'
        end        
    end

    def destroy
    end
end